Imagebulk
=======================

* Production tool: https://imagebulk.toolforge.org/
* Issue tracker: https://phabricator.wikimedia.org/tag/indic-techcom/
* Discussion: [https://meta.wikimedia.org/wiki/Indic-TechCom/Tools/Imagebulk](https://meta.wikimedia.org/wiki/Indic-TechCom/Tools/Imagebulk)

## Installation

1. Clone repo: `git clone https://github.com/Jayprakash-SE/imagebulk.git`
2. `cd imagebulk`
3. `python3 -m venv venv`
4. `source venv/bin/activate`
5. `pip install -r requirements.txt`
6. `docker-compose -f docker-compose.yml up --build`
7. `docker run --name imagebulk`
8. Run: `python3 app.py`
9. Open http://127.0.0.1:5000/

## Author
* Jay Prakash

## License

This is Free Software, released under the MIT License.
