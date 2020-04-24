/*
// Sample code to perform I/O:
#include <stdio.h>

int main(){
    int num;
    scanf("%d", &num);              			// Reading input from STDIN
    printf("Input number is %d.\n", num);       // Writing output to STDOUT
}

// Warning: Printing unwanted or ill-formatted data to output will cause the test cases to fail
*/

// Write your code here
#include <stdio.h>
#include <stdlib.h>

typedef struct {
    unsigned long size, count;
} cake;

int compareLongs(const void *a, const void *b) {
    unsigned long A = *((unsigned long *) a);
    unsigned long B = *((unsigned long *) b);
    return B > A ? 1 : B < A ? -1 : 0;
}

int compareCakes(const void *a, const void *b) {
    unsigned long A = ((cake *) a)->size;
    unsigned long B = ((cake *) b)->size;
    return B > A ? 1 : B < A ? -1 : 0;
}

unsigned long computeMinimumTimeRequired(cake *cakes, unsigned long cakeTypeCount) {
    long long leftoverCakes, cakesToEatThisTurn, friendsThisTurn, friendsLastTurn, minutes;
    minutes = 0; //Reset counted minutes to base
    leftoverCakes = 0; //Reset additional cakes to eat this turn to 0 because there was no last turn
    friendsLastTurn = 0; //Reset friends last to to 0 because there was no last turn
    for (unsigned long i = 0; i < cakeTypeCount; i++) //Iterate each cake type
    {
        cakesToEatThisTurn = cakes[i].count; //Number of cakes of this type
        friendsThisTurn = cakes[i].size; //Number of friends that can eat this type
        cakesToEatThisTurn += leftoverCakes; //Add in cakes that were missed last turn because there were not enough to justify a minute
        cakesToEatThisTurn -= (friendsThisTurn - friendsLastTurn) *
                              minutes; //Remove cakes that could have been eaten by new friends during previous minutes
        //Reset variables for next turn
        leftoverCakes = 0;
        friendsLastTurn = friendsThisTurn;
        if (cakesToEatThisTurn >= friendsThisTurn) //Cakes will be eaten
        {
            minutes += cakesToEatThisTurn / friendsThisTurn; //Add time needed to eat cakes
            leftoverCakes = cakesToEatThisTurn %
                            friendsThisTurn; //get cakes that could have also been eaten during these minutes
            if (leftoverCakes != 0) //Cakes were left over
            {
                minutes++; //Add a minute to finish them
                leftoverCakes -= friendsThisTurn; //Pass in number of cakes these friends can eat from next turn
            }
        } else //Cakes will be passed to next turn
        {
            leftoverCakes = cakesToEatThisTurn; //Cakes to be added to the pile next iteration
        }
    }
    return minutes; //Return the minimum number of minutes needed to eat all of the cakes
}

void convertCakeSizeIntoNumberOfFriendsThatCanEatTheCake(cake *cakes, unsigned long *friends, unsigned long friendCount,
                                                         unsigned long cakeTypeCount) {
    unsigned long j = 0; //Initialize j to a starting index
    for (unsigned long i = 0; i < cakeTypeCount; i++) {
        while (j < friendCount) //Loop if the index is less than the friend count
        {
            if (cakes[i].size <= friends[j]) //If this friend can eat this cake then check next
            {
                j++; //Update the index to check next
            } else //This friend can't eat this cake
            {
                break; //Return to assign the number of friends that can eat the cake
            }
        }
        cakes[i].size = j; //Assign the number of friends that can eat the cake to the size
    }
}

int main() {
    unsigned short testCaseCount; //Number of test cases
    unsigned long cakeTypeCount; //Number of cakes in the cake arrays
    unsigned long friendCount; //Number of friends in the friend array
    scanf("%hu", &testCaseCount); //Read number of test cases
    while (testCaseCount--) //Iterate each test case
    {
        scanf("%lu %lu", &cakeTypeCount, &friendCount); //Read the number of cakes and friends
        unsigned long *friends = (unsigned long *) malloc(
                friendCount * sizeof(unsigned long)); //Array to hold friend info
        cake *cakes = (cake *) malloc(cakeTypeCount * sizeof(cake)); //Array to hold cake info
        for (unsigned long i = 0; i < friendCount; i++) //Populate friend weights
        {
            scanf("%lu", &friends[i]); //Read next friend
        }
        for (unsigned long i = 0; i < cakeTypeCount; i++) //Populate cake weights
        {
            scanf("%lu", &(cakes[i].size)); //Read next cake size
        }
        for (unsigned long i = 0; i < cakeTypeCount; i++) //Populate cake counts
        {
            scanf("%lu", &(cakes[i].count)); //Read next cake count
        }
        qsort(cakes, cakeTypeCount, sizeof(cake),
              compareCakes); //Order cakes largest to smallest using the number of people that can eat each one
        qsort(friends, friendCount, sizeof(unsigned long),
              compareLongs); //Order cakes largest to smallest using the number of people that can eat each one
        if (cakes[0].size > friends[0]) //Make sure there is no cake too big
        {
            printf("%hi\n", -1); //One or more cakes can't be eaten
        } else {
            convertCakeSizeIntoNumberOfFriendsThatCanEatTheCake(cakes, friends, friendCount, cakeTypeCount);
            free(friends); //Free friends array as it is no longer needed
            printf("%lu\n", computeMinimumTimeRequired(cakes, cakeTypeCount));
            free(cakes); //Free cakes array as it is no longer needed
        }
    }
    return 0;
}