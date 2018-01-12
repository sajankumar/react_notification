# react_notification library. 
It is just a simple notification library which allows you to notify your users. 

# Prerequisites
  Depends on font-awesome icons, you can add this below line of your code on your index.html file or you can install from npm package npm install font-awesome
  ```<link rel="stylesheet"    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">```


# Installing
  ```npm install react_nofitication```

# usage
 ``` //define your config objects
    this.config = {
        type: 'danger',
        icon: 'fa-exclamation-circle',
        message: `I am a danger notification!.`,
        isAutoClose: false //by default. If you set it true notification will close after 3 seconds.
      };

  //pass it to the component    
  <Notification config={this.config} /> ```

 ``` // you can handle some logic when you close your notification.
    close(event) {
      console.log('event', event);
      //your logic..
    }
    render(){
      return(
          <Notification config={this.config} onCloseHandler={this.close.bind(this)}/>
    );
  }
  ```
# License
  ISC



