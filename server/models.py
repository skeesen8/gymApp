from sqlalchemy_serializer import SerializerMixin
from sqlalchemy.ext.associationproxy import association_proxy

from config import db


class Gym(db.Model, SerializerMixin):
    __tablename__ = 'gyms'
    serialize_rules = ('-reviews.gym',)

    id = db.Column(db.Integer, primary_key=True)
    name  = db.Column(db.String, nullable=False)
    description = db.Column(db.String)
    rating = db.Column(db.Integer)
    image = db.Column(db.String)
    location = db.Column(db.String)
    reviews = db.relationship('Review', back_populates = 'gym', cascade = 'all, delete-orphan')
    users = association_proxy('reviews', 'user')



class Review(db.Model, SerializerMixin):
    __tablename__ = 'reviews'
    serialize_rules = ('-user.reviews',('-gym.reviews'))
# # # # class Review(db.Model, SerializerMixin):
# # # #     __tablename__ = 'reviews'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String, nullable=False)
    rating = db.Column(db.Integer)
    review_description = db.Column(db.String)
    gym_id = db.Column(db.Integer, db.ForeignKey('gyms.id'))
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    gym = db.relationship('Gym', back_populates = 'reviews')
    user = db.relationship('User', back_populates= 'reviews')

class User(db.Model, SerializerMixin):
    __tablename__ = 'users'
    serialize_rules = ('-reviews.user',)
# # # # class User(db.Model, SerializerMixin):
# # # #     __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String, nullable =False)
    age = db.Column(db.Integer, nullable=False)
    reviews = db.relationship('Review', back_populates= 'user', cascade = 'all, delete-orphan')
    gyms = association_proxy('reviews', 'gym')
# # # #     id = db.Column(db.Integer, primary_key=True)
# # # #     name = db.Column(db.String, nullable =False)
# # # #     age = db.Column(db.Integer, nullable=False)
# # # #     reviews = db.relationship('Review', back_populates= 'user', cascade = 'all, delete-orphan')
# # # #     gyms = association_proxy('review', 'gym')

