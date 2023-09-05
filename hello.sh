echo "Hello World"

#echo Our shell name is $HOME

#name=Mark
#echo The name is $name

#echo "Enter name :"
#read name1 name2 name3
#echo "Entered name : $name1, $name2, $name3"

#read -p 'username : ' user_var
#echo "Username: $user_var"

#Banana = "Banana"
#echo "The first fruit is: $Banana"
#echo "The second fruit is: $2"
#echo "The third fruit is: $3"

name=abc
if [ $name == "abc"]
then 
   echo "condiotion is true"
else
   echo "condition is false"
fi

num1=20.5
num2=5

echo "20.5+5" | bc

#How to write an array and print it
os=('ubuntu', 'windows', 'kali')

echo "${os[@]}"
echo "${os[2]}"
echo "${!os[@]}" #number of elements in th array
echo "${#os[@]}" #last element of the array

#loop with while
n=7

while[ $n -gt 4]
do 
 echo "$n"
 (( n-- ))
done 

echo "Out of the loop"

#Concatenation
read str1
read str2

c=$str1$str2
echo $c

#to lowercase
echo ${str1^}
#to uppercase
echo ${str1^^}

#Converting hexadecimal into decimal
echo "Enter Hex number of your choice"
read Hex
echo -n "The decimal value of $Hex is :"
echo "obase=10; ibase= 16; $Hex | bc"

#array
car=('BMW', 'TOYOTA', 'HONDA')
#prints the first element from the array
echo "${car[0]}"
#printing the number of elements in the array
echo "${#car[0]}"

#creating function and calling it
function funcCheck(){

   returningValue= "using function right now"
   echo "$returningValue"
}
funcCheck

#creating a file by using a bash program
echo "enter the name of the file"
read FileName

touch $FileName

#writing directly in a file 
echo "enter the name of the file you want to write in"
read file

if[ -f $file]
then 
  echo "enter the text you want to write in"
  read text
  echo "$text" >> $file
else
  echo "The file does not exist"  
fi

#remove file
echo "enter the file name you want to delete"
read fileName

if [ -f "$fileName"]
then rm $fileName
else
  echo "The file does not exist"
fi  