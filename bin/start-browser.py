import os
from os import path
from subprocess import call
import webbrowser
project_root = path.dirname(path.dirname(path.realpath(__file__)))
http_server = path.join("node_modules", ".bin", "http-server")
if os.name == "nt": http_server += ".cmd"
webbrowser.open("http://127.0.0.1:8080")
call([http_server, path.join("browser")], cwd=path.join(project_root))

