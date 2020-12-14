import React, { useState } from 'react'
import emailjs from 'emailjs-com';

const EmailForm = (e) =>{
    // Set input fields to empty
    const [fromName, setFromName] = useState('')
    const [fromEmail, setFromEmail] = useState('')
    const [fromMessage, setFromMessage] = useState('')
    const [subject, setSubject] = useState('')

    // Set an object that holds the form errors
    const [fromNameError, setFromNameError] = useState({})
    const [fromEmailError, setFromEmailError] = useState({})
    const [fromMessageError, setFromMessageError] = useState({})
    const [subjectError, setSubjectError] = useState({})
    
    //message bag
    const [msgBag, setMsgBagError] = useState({})


        const formValidation = ()=>{
            const fromNameError = {};
            const fromEmailError = {};
            const fromMessageError = {};
            const subjectError = {};
            let isValid = true;
            
            if(fromName.trim().length < 3){
                fromNameError.fromNameShort = 'Invalid Name.. Name too short';
                isValid = false;
            }
            

            if(!fromEmail.includes("@")){
                fromEmailError.fromEmailInvalid = 'Invalid Email Address';
                isValid = false;
            }
            
            if(subject.trim().length < 3){
                subjectError.subjectShort = 'Subject too short';
                isValid = false;
            }

            if(subject.trim().length > 30){
                subjectError.subjectLong = 'Subject too Long. Must be less than 30';
                isValid = false;
            }

            
            if(fromMessage.trim().length < 3){
                fromMessageError.fromMessageShort = 'Message too short';
                isValid = false;
            }

            setFromNameError(fromNameError);
            setFromEmailError(fromEmailError);
            setFromMessageError(fromMessageError);
            setSubjectError(subjectError);
            
            return isValid;
        }
    const handleReset = () => {
            setFromName('')
            setFromMessage('')
            setSubject('')
          };
    const handleSubmit = (e) =>{
        e.preventDefault()
        const isValid = formValidation()
        const msgBag = {};
        console.log(isValid)
        if(isValid){
            emailjs.sendForm('service_ekgm4jf', 'template_8o5rofv', e.target, 'user_DAjiBufAbPPi0RTNMoUWn')
            .then((result) => {
                // console.log(result.text);
                handleReset()
                msgBag.successMsg = 'Form submited successfully'
                setMsgBagError(msgBag)
            }, (error) => {
                msgBag.msg = 'Something went wrong. Check internet Connectivity or Refresh Page'
                setMsgBagError(msgBag)
            });
            // document.getElementById('email-form').reset();
        }else{
            msgBag.msg = 'Form contain errors'
            setMsgBagError(msgBag)
        }
        
    }

    const errmsg = {
        color:'red',
        fontSize:15,
        margin:'-15px 0px -5px 15px'
    }
    const sucmsg = {
        color:'rgb(0, 209, 224)',
        fontSize:15,
        margin:'-15px 0px -5px 15px'
    }
    const styleForm = {
        marginLeft:'-10%'
    }
    return (
            <fieldset>
                <legend>Direct Message</legend>
                <div className="content">
                    <form onSubmit={handleSubmit} style={styleForm}>
                        <div className="p-input-wrap">
                            <label htmlFor="from_name">Your Name:</label>
                            {/* display error message */}
                            {
                                Object.keys(fromNameError).map((key)=>{
                                    return <div style={errmsg} key={key}>
                                        {fromNameError[key]}</div>
                                })
                            }
                            <input type="text" name="from_name"
                                value={fromName} 
                                onChange={(e) =>{setFromName(e.target.value)}}
                                required />
                        </div>
                        <div className="p-input-wrap">
                            <label htmlFor="email">Email:</label>
                            {/* display error message */}
                            {
                                Object.keys(fromEmailError).map((key)=>{
                                    return <div style={errmsg} key={key}>
                                        {fromEmailError[key]}</div>
                                })
                            }
                            <input type="email" name="reply_to" 
                                value={fromEmail} 
                                onChange={(e) =>{setFromEmail(e.target.value)}}
                                required />
                        </div>
                        <div className="p-input-wrap">
                            <label htmlFor="subject">SubJect:</label>
                            {/* display error message */}
                            {
                                Object.keys(subjectError).map((key)=>{
                                    return <div style={errmsg} key={key}>
                                        {subjectError[key]}</div>
                                })
                            }
                            <input type="text" placeholder="Subject Here" name="subject" 
                                value={subject} 
                                onChange={(e) =>{setSubject(e.target.value)}}
                                required />
                        </div>
                        <div className="p-input-wrap">
                            <label htmlFor="message">Message</label>
                            {/* display error message */}
                            {
                                Object.keys(fromMessageError).map((key)=>{
                                    return <div style={errmsg} key={key}>
                                        {fromMessageError[key]}</div>
                                })
                            }
                            <textarea id="" cols="30" rows="10" 
                                placeholder="Please write your Message here " name="message" 
                                value={fromMessage} 
                                onChange={(e) =>{setFromMessage(e.target.value)}}
                                required></textarea>
                        </div>
                        {
                            Object.keys(msgBag).map((key)=>{
                                return <div style={msgBag.successMsg ? sucmsg : errmsg} key={key}>
                                    {msgBag[key]}</div>
                            })
                        }
                        <div className="p-btn-wrap" >
                            <button className="p-btn">Send</button>
                        </div>
                    </form>
                </div>
            </fieldset>
    )
}

export default EmailForm
