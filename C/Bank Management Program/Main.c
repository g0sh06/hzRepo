#include <stdio.h>
#include <string.h>
#include <stdlib.h>
#define Balance 100


struct user
{
  char phone[50];
  char firstname[50];
  char secondname[50];
  char password[50];
  float balance;
};

int main(){
  struct user c;
  int opt;
  FILE *fp;
  char filename[50], testphone[50], testpassword[50];
  char cont = 'y';
  int choice;
  int addedmoney;
  int withdrawnmoney;
  int amount;

  printf("Welcome to our bank. How can we help you\n");
  printf("Please choose one option\n");
  printf("1.Register an account\n");
  printf("2.Login to an account\n");
  

  scanf("%d", &opt);
   
   //code for the first option
   if (opt = 1)
   {
    system("clear");
    printf("Please enter your first name\n");
    scanf("%s\n", c.firstname);
    printf("Please enter your second name\n");
    scanf("%s\n", c.secondname);
    printf("Please enter your phone number\n");
    scanf("%s\n", c.phone);
    printf("Please enter your password\n");
    scanf("%s\n", c.password);
    printf("To start a new account you have to put into a 100 dollars");
    c.balance = Balance;
    strcpy(filename, c.phone);
    fp = fopen(strcat(filename, ".dat"), "w");
    fwrite(&c, sizeof(struct user), 1, fp);
    if(fwrite != 0){
        printf("\n\nAccount succesfully registered");
    }else{
        printf("\n\nSomething went wrong");
    }
    
   }

   //code for the second option
   if(opt = 2){
   system("clear");
   printf("\nPhone number\n");
   scanf("%s", testphone);
   printf("Password: \n");
   scanf("%s",testpassword);
   strcpy(filename, testphone);

   //opening the .dat files and reading the data from them
   fp = fopen(strcat(filename, ".dat"), "r");
   if(fp == NULL){
     printf("\nAccount number is not entered before. Please create an account");
    }else{
     fread(&c, sizeof(struct user), 1, fp);
     fclose(fp);
     if(!strcmp(testpassword, c.password)){
       while(cont == 'y'){
       	system("clear");
       	printf("\n Press 1 to cheack balance");
       	printf("\n Press 2 to deposit an amount of money");
       	printf("\n Press 3 to withdraw");
       	printf("\n Press 4 to change the password");
       	
       	scanf("%d", &choice);
       	
       	switch(choice)
		{  
		   case 1:
		   	printf("\n Your current balance is %.2f", c.balance);
		   break;
		   
		   case 2:
		   	printf("\n Enter the amount:\t");
		   	scanf("%i", &addedmoney);
		   	c.balance+= addedmoney;
		   	fp = fopen(filename, "w");
		   	fwrite(&c, sizeof(struct user), 1, fp);
		   	if(fwrite != NULL) printf("Succesfully deposited.");
		   	fclose(fp);
		   break;
		   
		   case 3:
		   	printf("\n Enter the amount:\t");
		   	scanf("%i", &withdrawnmoney);
		   	c.balance -= withdrawnmoney;
		   	fp = fopen(filename, "w");
		   	fwrite(&c, sizeof(struct user), 1, fp);
		   	if(fwrite != NULL) printf("\n You have withdrawn %.2d", amount);
		   	fclose(fp);
		   break;
		   
		   case 4:
		   	printf("\nPlease enter the phone numberto transfer the balance");
		   	scanf("%s", phone);
		   	printf("\nPlease enter the amount to transfer\t");
		   	scanf("%i", &amount);
		   	if(amount > c.balance)
			   {
              printf("\n Insufficient balance");		
		    }
       else{
		   	strcpy(filename, phone);
		   	fp = fopen(strcat(filename, ".dat"), "w");
		   	fread(&c, sizeof(struct user), 1, fp);
        fclose(fp);
        fp = fopen(filename, "w");
       }
		   break; 		
		}
	   }
     }else{
       printf("\nInvalid password");
     }
   }
   

 }

} 


/**void registration()
{

  system("clear");
  printf("Please enter your first name\t");
  scanf("%s\n", (*c).firstname);



}***/
