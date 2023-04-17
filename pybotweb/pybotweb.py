from bottle import route, run, template, request, static_file
from pybot import pybot


@route('/static/<filename:path>')
def serve_static(filename):
    """静的ファイルを返す
    """
    return static_file(filename, root='static')

@route('/hello')
def hello():
    return template('templates/pybot_template', input_text='', output_text='')


@route('/hello', method='POST')
def do_hello():
    input_text = request.json.get('text')
    output_text = pybot(input_text)
    return template('templates/pybot_template', input_text=input_text, output_text=output_text)


run(host = 'localhost', port = 8000, debug = True)
