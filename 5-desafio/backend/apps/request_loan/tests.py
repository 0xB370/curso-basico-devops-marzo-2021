from django.test import TestCase

# Create your tests here.
class ExampleTestClass(TestCase):

    def test_false_is_true(self):
        print("Method: test_false_is_true.")
        self.assertTrue(True)