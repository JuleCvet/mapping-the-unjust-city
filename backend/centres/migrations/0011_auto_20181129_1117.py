# Generated by Django 2.1.3 on 2018-11-29 11:17

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('centres', '0010_remove_centre_ownership_history'),
    ]

    operations = [
        migrations.AlterField(
            model_name='historicalowner',
            name='centre',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='historical_owners', to='centres.Centre'),
        ),
    ]
