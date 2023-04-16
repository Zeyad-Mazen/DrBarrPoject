from django.db import models
from django.utils.timezone import now
from phonenumber_field.modelfields import PhoneNumberField
from datetime import datetime, timedelta, timezone

# Create your models here.


#def Days_Countdown(self):
	#specific_date = plan_update_date
	#new_date = specific_date + timedelta(14)
	#new_date_stripped = str(new_date).split("," , 1) [0]	

	#return new_date_stripped




			#def __init__(self, *args, **kwargs):
				#super().__init__(*args, **kwargs)
				#return Days_Countdown





class Client(models.Model):
	full_name = models.CharField(max_length= 200)
	def __str__(self):
		return self.full_name
	age = models.IntegerField()
	job = models.CharField(max_length=50, null="")
	start_date = models.DateTimeField(default= now)
	GENDER_MALE = 1
	GENDER_FEMALE = 2
	GENDER_CHOICES = [(GENDER_MALE, 'Male'), (GENDER_FEMALE, 'Female')]
	gender = models.IntegerField(choices=GENDER_CHOICES)

	one_month = 1
	three_months = 3
	six_months = 6
	DURATION_CHOICES = [(one_month, '1 Month'), (three_months, '3 Months'), (six_months, '6 Months')]
	duration = models.IntegerField(choices=DURATION_CHOICES)
	goal = models.TextField()
	weight = models.DecimalField(decimal_places=2, max_digits=1000)
	height = models.DecimalField(decimal_places=2, max_digits=1000)
	waist_circumference = models.DecimalField(decimal_places=2, max_digits=1000)
	arm_circumference = models.DecimalField(decimal_places=2, max_digits=1000)
	chest_circumference = models.DecimalField(decimal_places=2, max_digits=1000)
	food_allergy = models.CharField(max_length = 350)
	dieseases = models.CharField(max_length = 350)
	surgeries = models.CharField(max_length= 3050)
	drugs_or_supplements = models.TextField(max_length= 300)
	food_you_do_not_like = models.TextField(max_length= 300)
	food_you_like = models.TextField(max_length= 300)
	three = 3
	four = 4
	five = 5
	six = 6
	MEALS_CHOICES = [(three, '3 Meals'), (four, '4 Meals'), (five, '5 Meals'), (six, '6 Meals')]
	how_many_meals_do_you_want = models.IntegerField(choices=MEALS_CHOICES)
	phone_number = PhoneNumberField(blank=False, region="EG")
	expiration_date = models.DateTimeField(default= now, blank= True)
	notes = models.CharField(max_length= 500, blank= True)
	plan_update_date = models.DateTimeField(default=datetime.now(), blank=True)

	#latest_plan_sent = models.ForeignKey('DaysCountdown', on_delete=models.CASCADE, blank= True, null=True)
	
	@property
	def New_Plan_In(self):
		now = datetime.now(timezone.utc)
		new_date = timedelta(days=14) - ((now - self.plan_update_date))
		new_date_stripped	= (str(new_date).split(",", 1)[0] )
		return (new_date_stripped)

	