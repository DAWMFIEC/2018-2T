#https://github.com/Pithikos/python-websocket-server
import json
import logging
from websocket_server import WebsocketServer

users = dict()

# Called for every client connecting (after handshake)
def cliente_nuevo(client, server):
	
	print("El cliente con id: %d se ha conectado" % client['id'])


# Called for every client disconnecting
def salida_cliente(client, server):
	
	print("Cliente(%d) desconectado" % client['id'])
	
	message = dict()
	message["type"] = "disconnected"
	message["id"]   = str(users[client['id']]['ticket']) 
	message["name"] = str(users[client['id']]['name']) 
	
	json_data = json.dumps(message)
	server.send_message_to_all(json_data)


# Called when a client sends a message
def mensaje_recibido(client, server, message):
	
	obj = json.loads(message)
	
	if obj['type'] == 'message':
		print("%s escribió %s" % (obj['name'], obj['text']))

		message = dict()
		message["type"] = "resend"
		message["id"]   = str(obj['id']) 
		message["name"] = str(obj['name']) 
		message["text"] = str(obj['text'])

		json_data = json.dumps(message)
		server.send_message_to_all(json_data)

	elif obj['type'] == 'connect':

		users[client['id']] = { 
			'ticket': client['id'], 
			'name': obj['name']
		}


		message = dict()
		message["type"] = "connected"
		message["id"]   = str(users[client['id']]['ticket']) 
		message["name"] = str(users[client['id']]['name']) 
		
		json_data = json.dumps(message)
		server.send_message_to_all(json_data)


PORT=9001
server = WebsocketServer(PORT, host='127.0.0.1')
server.set_fn_new_client(cliente_nuevo)
server.set_fn_client_left(salida_cliente)
server.set_fn_message_received(mensaje_recibido)
server.run_forever()