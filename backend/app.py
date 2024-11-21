from flask import Flask, jsonify
from flask_cors import CORS
from db.models import db

app = Flask(__name__)
CORS(app)  # Pour autoriser les requêtes du front-end

@app.route("/")
def index():
    return jsonify({"message": "Bienvenue sur l'API Crypto Banking!"})

app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///db/database.db"
db.init_app(app)


if __name__ == "__main__":
    app.run(debug=True)
