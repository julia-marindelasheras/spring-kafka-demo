# ess-terminal

This application generates terminals every few seconds and places them as messages onto the
queue configured in `application.properties`.
I am trying to simulate the real scenario of ESS creating/removing/updating terminals, and how we will consume these messages to know if each moment how to act. 
