def start():
    print('This is my Rock Paper Scissors Game!')
    player_one = 'John'
    player_two = 'Maria'

    player_one_choice = input('Does ' + player_one + ' choose Rock, Paper or Scissors? ').lower()
    player_two_choice = input('Does ' + player_two + ' choose Rock, Paper or Scissors? ').lower()
    print(choices(player_one_choice, player_two_choice))
    play_again()

def choices(player_one_choice, player_two_choice):
    if player_one_choice == 'rock' and player_two_choice == 'paper':
        return 'Paper covers Rock! ' + 'Maria wins!'
    elif player_one_choice == 'paper' and player_two_choice == 'rock':
        return 'Paper covers Rock! ' + 'John wins!'
    elif player_one_choice == 'scissors' and player_two_choice == 'paper':
        return 'Scissors cuts Paper! ' + 'John wins!'
    elif player_one_choice == 'rock' and player_two_choice == 'scissors':
        return 'Rock smashes Scissors! ' + 'John wins!'
    elif player_one_choice == 'paper' and player_two_choice == 'scissors':
        return 'Scissors cuts Paper! ' + 'Maria wins!'
    elif player_one_choice == 'scissors' and player_two_choice == 'rock':
        return 'Rock smashes Scissors! ' + 'Maria wins!'
    elif player_one_choice == player_two_choice:
        return 'John and Maria tied!'
    else:
        return 'Please type Rock, Paper or Scissors!'

def play_again():
    again = input('Would you like to play the game again? (yes/no) ').lower()
    if again == 'no':
        print('Thanks for playing!')
        quit()
    elif again == 'yes':
        start()
    else:
        print('Please enter Yes or No. Thank you!')
        play_again()

start()
