# Generated by Django 4.1.7 on 2023-03-25 17:41

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion
import django.utils.timezone


class Migration(migrations.Migration):
    initial = True

    dependencies = [
        ("properties", "0001_initial"),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name="Auction",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("amount", models.PositiveBigIntegerField()),
                ("is_active", models.BooleanField(default=True)),
                (
                    "date_created",
                    models.DateTimeField(default=django.utils.timezone.now),
                ),
                (
                    "buyer",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.PROTECT,
                        to=settings.AUTH_USER_MODEL,
                    ),
                ),
                (
                    "property",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.PROTECT,
                        to="properties.property",
                    ),
                ),
            ],
            options={
                "verbose_name": "Auction",
                "verbose_name_plural": "Auctions",
            },
        ),
    ]