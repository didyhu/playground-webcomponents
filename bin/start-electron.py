import os
from os import path
from subprocess import call
project_root = path.dirname(path.dirname(path.realpath(__file__)))
electron = path.join("node_modules", ".bin", "electron")
if os.name == "nt": electron += ".cmd"
call([electron, path.join("electron", "main")], cwd=path.join(project_root))

