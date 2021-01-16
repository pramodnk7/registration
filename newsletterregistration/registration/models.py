from django.db import models


class Registration(models.Model):
	name = models.CharField(max_length=50)
	email = models.CharField(max_length=30, unique=True)
	phone_number = models.CharField(max_length=20, blank=True, null=True)
	created_on = models.DateField(auto_now_add=True)

	def __unicode__(self):
		return self.name + "("+self.email+")"