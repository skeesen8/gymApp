#!/usr/bin/env python3

# Standard library imports

# Remote library imports
from flask import request, make_response
from flask_restful import Resource

# Local imports
from config import app, db, api

from models import User, Gym, Review

# Views go here!

@app.route('/')
def index():
    return '<h1>Project Server</h1>'


if __name__ == '__main__':
    app.run(port=5555, debug=True)

class Gyms(Resource):
    def get(self):
        gyms = [gym.to_didct() for gym in Gym.query.all()]
    def post(self):
        params = request.json
        try: 
            new_gym = Gym(
            name = params['name'],
            description=params['description'],
            rating= params['rating'],
            image= params['url']
            )
        except:
            return make_response({'error':' invalid gym'}, 404)
        db.session.add(new_gym)
        db.session.commit()
        return make_response(new_gym.todict(), 201)
             
        
api.add_resource(Gyms, '/addgym')

    


        

