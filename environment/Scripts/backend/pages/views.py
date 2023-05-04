from django.shortcuts import render
from django.http import HttpResponse
from Media.models import Reel
from Registration.models import Client
import smtplib as smtp
from email.message import EmailMessage
import math

# Create your views here.
def home_view(request, *args, **kwargs):
	reel_list = Reel.objects.all()
	context = {
    	'video': reel_list
    }
	return render(request, "index.html", context)

def registration_view(request, *args, **kwargs):
	if request.method == 'POST':
		fName = request.POST['fName']
		lName = request.POST['lName']
		fullName_front = fName + ' ' + lName
		gender_front = request.POST['gender-type']
		mail_front = request.POST['mail']
		age_front = request.POST['age']
		job_front = request.POST['job']
		relationship_front = request.POST['relationship']
		goal_front = request.POST['goal']
		weight_front = request.POST['weight']
		height_front = request.POST['height']
		chest_front = request.POST['chest']
		waist_front = request.POST['waist']
		arm_front = request.POST['arm']
		foodAlergie_front = request.POST['foodAlergie']
		sickness_front = request.POST['sickness']
		operations_front = request.POST['operations']
		supplements_front = request.POST['supplements']
		likedFood_front = request.POST['likedFood']
		dislikedFood_front = request.POST['dislikedFood']
		meals_front = request.POST['meals']
		firstTime_front = request.POST['first-time']
		pricePlan_front = request.POST['price-plan']
		date_front = request.POST['currentDate']
		#mail_sender(mail_front, "Hello " + fullName_front + "\n Please confirm your registration by sending registration fees through Vcash or a bank transfer", "Confirmation Mail")
	return render(request, "registration.html",{})

def mail_sender(reciver, massege, subject):
	connection = smtp.SMTP_SSL('smtp.gmail.com', 465)	
	
	email_addr = 'yahiaraouf267@gmail.com'
	email_passwd = 'zcvszpoozybfxoln'
	connection.login(email_addr, email_passwd)

	msg = EmailMessage()
	msg.set_content(massege)

	msg['Subject'] = subject
	msg['From'] = email_addr
	msg['To'] = reciver
	
	connection.send_message(msg)
	connection.close()

def divide_chunks(l, n):    
    # looping till length l
    for i in range(0, len(l), n):
        yield l[i:i + n]

def reel_view(request, *args, **kwargs):
	
	reel_list = Reel.objects.all()

	context = {
		"reel_list" : reel_list,
    }

	return render(request, "reels.html", context)

def contactUs_view(request, *args, **kwargs):
	if request.method == 'POST':
		fName = request.POST['fName']
		lName = request.POST['lName']
		fullName_front = fName + ' ' + lName
		phone_front = request.POST['phone']
		mail_front = request.POST['mail']
		message_front = request.POST['message']

		message = "From " + fullName_front + "\n\n" + message_front + "\n\n" + phone_front + "\n" + mail_front

		mail_sender("yahialion2002+drBarr@gmail.com", message, "A client massege")
	return render(request, "contactUs.html", {})