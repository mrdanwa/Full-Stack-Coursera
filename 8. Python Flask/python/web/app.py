from flask import Flask, jsonify, request, render_template

app = Flask(__name__)

# Simple in-memory database (list of people)
people = ['John', 'Jane', 'Doe']

@app.route('/')
def index():
    return render_template('index.html', people=people)

@app.route('/add', methods=['POST'])
def add_person():
    new_person = request.form['name']
    people.append(new_person)
    return jsonify(success=True)

@app.route('/delete', methods=['POST'])
def delete_person():
    person_to_delete = request.form['name']
    if person_to_delete in people:
        people.remove(person_to_delete)
    return jsonify(success=True)

if __name__ == '__main__':
    app.run(debug=True)
