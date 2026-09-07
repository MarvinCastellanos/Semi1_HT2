from flask import Flask, jsonify

app = Flask(__name__)

@app.route('/check', methods=['GET'])
def check():
    return "", 200

@app.route('/info', methods=['GET'])
def info():
    return jsonify({
        "Instancia": "Maquina 1 - Api Python",
        "Curso": "Seminario de Sistemas 1 A",
        "Grupo": "Grupo 1"
    })

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8080)