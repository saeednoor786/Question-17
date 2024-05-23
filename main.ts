
/*Q:17 Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the 
    dinner, and you have space for only two guests.

• Start with your program from Exercise 16. Add a new line that prints a message saying that you can 
    invite only two people for dinner.
• Remove guests from your list one at a time until only two names remain in your list. Each time you 
    pop a name from your list, print a message to that person letting them know you’re sorry you can’t 
    invite them to dinner.
• Print a message to each of the two people still on your list, letting them know they’re still invited.
• Remove the last two names from your list, so you have an empty list. Print your list to make sure you 
    actually have an empty list at the end of your program.*/

   let Guest_list: string [] = ["salman", "ahmed","saeed",];

   console.log("GOOD NEWS! We've found a bigger dinner table now more space is available to new guest_list are: \n");
   
   Guest_list.unshift("Usama");
   Guest_list.splice(0,2, "Raheem");
   Guest_list.push("Noor");
   
   for (let c = 0; c < Guest_list.length; c++){
       console.log(`Dear ${Guest_list[c]} : \n you are invite to dinner! \n`);

    }
console.log("unfortunately,the new dinner table won't arrive in time,so we can only invite two people for dinner.\n");
 
while (Guest_list.length>2){

    let notInvited = Guest_list.pop()
    console.log(`sorry,Due to limited space we can't invite you to dinner Mr.${notInvited} \n`);
}

for (let c = 0; c < Guest_list.length; c++){
    console.log(`Dear ${Guest_list[c]} : \n you are still invite to dinner! \n`);
}
Guest_list.pop ()
Guest_list.pop ()
console.log(Guest_list)

 






