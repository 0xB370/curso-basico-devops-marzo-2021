from django.test import TestCase

# Create your tests here.
# def test_false_is_true():
#         print("Method: test_false_is_true.")
#         assert capitalize_string('test') == 'Test'

class ExampleTestClass(TestCase):

    def test_false_is_true(self):
        print("Method: test_false_is_true.")
        self.assertTrue(True)