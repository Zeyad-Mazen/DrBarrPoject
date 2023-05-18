from django.db import models
from django.utils.timezone import now
from phonenumber_field.modelfields import PhoneNumberField
from datetime import datetime, timedelta, timezone

# Create your models here.




class Client(models.Model):
	full_name = models.CharField(max_length= 200)	
	gender_type=(
		('male', "Male"),
		('female',"Female")
	)
	gender = models.CharField(max_length=10, choices= gender_type)
	email = models.EmailField(max_length=254, default= "")
	age = models.IntegerField()
	job = models.CharField(max_length=50, null="")

	relationship=(
		('single', "Single"),
		('married',"Married")
	)
	relationship_status = models.CharField(max_length=10, choices= relationship, default="single")
	goal = models.TextField()
	weight = models.DecimalField(decimal_places=2, max_digits=1000)
	height = models.DecimalField(decimal_places=2, max_digits=1000)
	chest_circumference = models.DecimalField(decimal_places=2, max_digits=1000)
	waist_circumference = models.DecimalField(decimal_places=2, max_digits=1000)
	arm_circumference = models.DecimalField(decimal_places=2, max_digits=1000)
	food_allergy = models.CharField(max_length = 350)
	dieseases = models.CharField(max_length = 350)
	surgeries = models.CharField(max_length= 3050)
	drugs_or_supplements = models.TextField(max_length= 300)
	food_you_like = models.TextField(max_length= 300)
	food_you_do_not_like = models.TextField(max_length= 300)


	meals=(
		('three', "3"),
		('four',"4"),
		('five',"5"),
		('six',"6"),
	)
	number_of_meals = models.CharField(max_length=10, choices= meals, default="three")

	did_he=(
		('no', "Yes"),
		('yes',"NO")
	)
	is_this_your_first_diet = models.CharField(max_length=10, choices= did_he, default="yes")
	
	pack=(
		('basic', "Basic"),
		('advanced',"Advanced"),
		('premium',"Premium")
	)
	package = models.CharField(max_length=10, choices= pack, default="advanced")
	start_date = models.DateField()

	
	phone_number = PhoneNumberField(blank=True, region="EG")
	expiration_date = models.DateField(auto_now_add=True ,blank= True)
	notes = models.CharField(max_length= 500, blank= True)
	plan_update_date = models.DateTimeField(default=datetime.now(), blank=True)
	paid = models.BooleanField(default=False, blank=True)

	#latest_plan_sent = models.ForeignKey('DaysCountdown', on_delete=models.CASCADE, blank= True, null=True)
	
	@property
	def New_Plan_In(self):
		now = datetime.now(timezone.utc)
		new_date = timedelta(days=14) - ((now - self.plan_update_date))
		new_date_stripped	= (str(new_date).split(",", 1)[0] )
		return (new_date_stripped)

	