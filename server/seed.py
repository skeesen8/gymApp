#!/usr/bin/env python3

# Standard library imports
from random import randint, choice as rc

# Remote library imports
from faker import Faker

# Local imports
from app import app
from models import db, Gym




fake = Faker()
    



def create_gyms():
    gyms = []
    for _ in range(10):
        a = Gym(
            name=fake.name(),
            description=fake.sentence(),
            rating = randint(1,5),
            image = fake.sentence()
        )
        gyms.append(a)

    return gyms

def create_reviews(users, gyms):
    reviews = []
    for _ in range(5):
        r = Review(
            name=fake.name(),
            rating= randint(1,5),
            review_description = fake.sentence(),
            gym_id = rc([gym.id for gym in gyms]),
            user_id = rc([user.id for user in users])

        )
        reviews.append(r)

    return reviews

def create_users():
    users = []
    for _ in range(20):
        u = User(
            name = fake.name(),
            age = rc (range(5,20))

        )
        users.append(u)

    return users


if __name__ == '__main__':
    with app.app_context():
        print("Clearing db...")
        Gym.query.delete()
        User.query.delete()
        Review.query.delete()

        print("Seeding gyms...")
        gyms = create_gyms()
        db.session.add_all(gyms)
        db.session.commit()

        print("Seeding users...")
        users = create_users()
        db.session.add_all(users)
        db.session.commit()

        print("Seeding reviews...")
        reviews = create_reviews(gyms, users)
        db.session.add_all(reviews)
        db.session.commit()

        print("Done seeding!")


        # create gym 
        # view all gym => /gyms
        # reviews
        # delete
