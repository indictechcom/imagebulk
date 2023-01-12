import datetime

def getUniqueName():
    # Create a unique file name based on time
    currentTime = str(datetime.datetime.now())
    return currentTime.replace(':', '_').replace(' ', '_').replace('-', '_')

def getHeader():
    agent = 'Imagebulk/1.0 (https://imagebulk.toolforge.org; 0freerunning@gmail.com) Imagebulk/1.0'
    return {
        'User-Agent': agent
    }
