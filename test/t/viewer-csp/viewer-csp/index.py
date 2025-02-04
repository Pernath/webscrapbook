#!/usr/bin/env python3
"""An alternative entry to test the index.html with dynamic port
"""
import sys
import os
import json

port = json.loads(os.environ['wsb.config'])['server_port2']
port = '' if port == 80 else ':' + str(port)
sys.stdout.buffer.write("""Content-Type: text/html
Content-Disposition: inline; filename="index.html"

""".encode("ASCII"))
with open(os.path.join(os.path.dirname(__file__), "index.html"), "r") as fh:
    sys.stdout.buffer.write(fh.read().format(port=port).encode("UTF-8"))
