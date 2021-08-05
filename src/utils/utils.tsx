const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

export const timePostedAgo = (created_at:string) => {
    const date = new Date();
    const splitArray = created_at.split('T');
    const [year,month,day] = splitArray[0].split('-');
    const [hour,min] = splitArray[1].split('-')[0].split(':');

    const yearDiff = parseInt(year) - date.getFullYear() ;
    const monthDiff =  parseInt(month) - date.getMonth();
    const daysDiff = parseInt(day) - date.getDate();
    const hoursDiff = parseInt(hour) - date.getHours();
    const minDiff = parseInt(min) - date.getMinutes();

    if(yearDiff > 0){
        return monthNames[parseInt(month) - 1]+" "+day+", "+year;
    }else if(monthDiff > 0 || daysDiff > 9){
        return monthNames[parseInt(month) - 1]+" "+day;
    }else if(daysDiff > 1){
        return daysDiff + " days ago";
    }else if(daysDiff === 1){
        return "1 day ago"
    }else if(hoursDiff > 1){
        return hoursDiff + " hours ago"
    }else if(hoursDiff > 0){
        return hoursDiff + " hour ago"
    }else if(minDiff > 0){
        return minDiff + " minutes ago"
    }else{
        return "Just Now"
    }    
}