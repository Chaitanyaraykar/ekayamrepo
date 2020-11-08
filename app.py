from flask import Flask
from flask import render_template
app = Flask(__name__)

@app.route('/')
@app.route('/home')
def home():
    return render_template('index.html')

@app.route('/quiz')
def quiz():
    return render_template('quiz.html')

@app.route('/pomo')
def pomo():
    return render_template('pomo.html')

if __name__ == '__main__':
    app.run(host="localhost", port='6220')
