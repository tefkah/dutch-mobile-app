import hashlib
import wget

f=open("words.txt", "r")
l = f.readlines()

for i in l:
    fn = "Nl-" + i[0:-1] + ".ogg"
    print(fn)
    filehash = hashlib.md5(fn.encode()).hexdigest()
    url = "https://upload.wikimedia.org/wikipedia/commons/" + filehash[0:1] + "/" + filehash[0:2] + "/" + fn
    print(url)
    try:
        wget.download(url)
    except:
        pass

