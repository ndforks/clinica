# -*- coding: utf-8 -*-
# Generated by Django 1.10.3 on 2016-12-02 22:55
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0002_auto_20161202_2245'),
    ]

    operations = [
        migrations.AlterField(
            model_name='pessoafisica',
            name='data_nascimento',
            field=models.DateField(null=True),
        ),
    ]
