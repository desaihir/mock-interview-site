"use client"
import React, { useState } from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { generateInterviewQuestions } from '@/utils/geminiAi'
import { Loader2Icon } from 'lucide-react'
import { db } from '@/utils/db'
import { MockInterview } from '@/utils/schema'
import { v4 as uuidv4 } from 'uuid';
import { useUser } from '@clerk/nextjs'
import moment from 'moment'

function AddNewInterview() {
  const [openDialog, setOpenDialog] = useState(false)
  const [jobPosition, setJobPosition] = useState()
  const [jobDesc, setJobDesc] = useState()
  const [jobExp, setJobExp] = useState()
  const [loading, setLoading] = useState(false)
  const [interviewQuestions, setInterviewQuestions] = useState([])
  const {user} =useUser()

  const onSubmit = async(e) => {
    setLoading(true)
    e.preventDefault()
    console.log("Job Position: ", jobPosition, 
    "Job Description: ", jobDesc, 
    "Job Experience: ", jobExp);

    const inputPrompt = `Job Position: ${jobPosition}, Job Description: ${jobDesc}, Years of Experience: ${jobExp}. 
    Depending on this information, please give me 5 interview questions with expected answers in JSON format. 
    Please give questions and answers as fields in JSON.`;

    
      const rawResponse = await generateInterviewQuestions(inputPrompt);
      
      const clean = rawResponse.replace(/```json|```/g, "");
      // const mockResp = clean;
      const json = JSON.parse(clean);

      console.log("Parsed Gemini Output:", json);
      // Set this to state if you want to display in UI
    
    setInterviewQuestions(clean);

    if(clean){
    // to save the interview questions to the database
    const resp= await db.insert(MockInterview).values({
      mockId: uuidv4(),
      jsonMockResp: clean,
      jobPosition: jobPosition,
      jobDesc: jobDesc,
      jobExperience: jobExp,
      createdBy: user?.primaryEmailAddress?.emailAddress,
      createdAt: moment().format("YYYY-MM-DD HH:mm:ss")
    }).returning({mockId: MockInterview.mockId, createdAt: MockInterview.createdAt});

    console.log("Inserted Mock Interview: ", resp);
    if(resp)
    setOpenDialog(false);
    }
    else{
      console.log("Error: No response from Gemini AI");
    }
    setLoading(false)
  };

  return (
    <div>
      <div className='p-10 border rounded-lg bg-secondary hover:scale-105 hover:shadow-md cursor-pointer transition-all' 
                     onClick={()=>setOpenDialog(true)}>
        <h2 className='text-lg text-center'>+ Add New</h2>
      </div>
      <Dialog open={openDialog}>
        {/* <DialogTrigger>Open</DialogTrigger> */}
        <DialogContent className='max-w-2xl'>
          <DialogHeader>
            <DialogTitle className='text-2xl'>Tell us more about your job interviewing</DialogTitle>
            <DialogDescription>
              <form onSubmit={onSubmit}>
              <div>              
                <h2>Add details about your job role/position, job description and years of experience.</h2>

                <div className='mt-5 my-3'>
                  <label>Job Role/Position</label>
                  <Input placeholder='Example: Full Stack Developer' required 
                   onChange={(event)=>setJobPosition(event.target.value)}/>
                </div>
                
                <div className='my-3'>
                  <label>Job Description/Tech Stack</label>
                  <Textarea placeholder='Example: React, Angular, Node.js' required
                   onChange={(event)=>setJobDesc(event.target.value)}/>
                </div>

                <div className='my-3'>
                  <label>Years of experience</label>
                  <Input placeholder='Example: 3' type='number' max="40" required
                   onChange={(event)=>setJobExp(event.target.value)}/>
                </div>

              </div>
              <div className='flex gap-5 justify-end'>
                <Button type='button' variant='ghost' onClick={()=>setOpenDialog(false)}>Cancel</Button>
                <Button type='submit' disabled={loading}>
                  {loading ? 
                  <><Loader2Icon className='animate-spin'/>"Loading Interview Questions"</>
                  :"Generate Interview Questions"}</Button>
              </div>
              </form>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>

    </div>
  )
}

export default AddNewInterview