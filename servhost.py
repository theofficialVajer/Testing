from http.server import HTTPServer, BaseHTTPRequestHandler
import socket
import webbrowser
import os

PORT = 6969
HTML_FILE = "index.html"  # Change this to your actual HTML file

class CustomHandler(BaseHTTPRequestHandler):
    def log_message(self, format, *args):
        pass  # Suppress terminal logs

    def do_GET(self):
        if self.path == "/" or self.path == f"/{HTML_FILE}":
            if os.path.exists(HTML_FILE):
                self.send_response(200)
                self.send_header("Content-type", "text/html")
                self.end_headers()
                with open(HTML_FILE, "rb") as f:
                    self.wfile.write(f.read())
            else:
                self.send_response(404)
                self.send_header("Content-type", "text/html")
                self.end_headers()
                self.wfile.write(b"<h1>Custom 404</h1><p>Your page is missing, Baboon!</p>")
        else:
            self.send_response(404)
            self.send_header("Content-type", "text/html")
            self.end_headers()
            self.wfile.write(b"<h1>404</h1><p>Nothing to see here.</p>")

if __name__ == "__main__":
    print(f"🚀 Your server is running at: http://localhost:{PORT}")
    webbrowser.open(f"http://localhost:{PORT}")
    httpd = HTTPServer(("localhost", PORT), CustomHandler)
    httpd.serve_forever()
