import requests
import zipfile
import shutil
import os

from celeryWorker import app
from util import getHeader, getUniqueName


@app.task()
def createZip(imageList):
    param = {
        "action": "query",
        "format": "json",
        "prop": "imageinfo",
        "titles": '|'.join( imageList ),
        "iiprop": "url"
    }

    # API request to get Commons file's URL
    resp = requests.get(url="https://commons.wikimedia.org/w/api.php", params=param)

    if resp.status_code == 200:
        d = resp.json()["query"]["pages"]

        # Creating temporary directory
        tempDir = 'temp/' + getUniqueName()
        os.mkdir( tempDir )

        # Download the files
        for i in d.values():
            imageUrl = i["imageinfo"][0]["url"]
            r = requests.get(imageUrl, allow_redirects=True, headers= getHeader())
            fileName = i["title"].replace("File:", "")
            if r.status_code == 200:
                open( tempDir + "/" + fileName, 'wb').write(r.content)

        # Creating zip file of downloaded files
        zipf = zipfile.ZipFile( tempDir + '.zip', 'w', zipfile.ZIP_DEFLATED)
        for file in os.listdir(tempDir):
            fileZipPath = os.path.join(tempDir, file)
            zipf.write(filename=fileZipPath, arcname=file)
        zipf.close()

        # Remove temporary directory
        shutil.rmtree( tempDir )

        return (tempDir + '.zip').replace("temp/", "")
    else:
        return -1
