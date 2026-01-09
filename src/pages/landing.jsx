import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { useNavigate } from 'react-router-dom';


const LandingPage = () => {
  
const [longUrl, setLongUrl] = useState();
const navigate = useNavigate()

const handleShorten = (e) =>{
  e.preventDefault();
  if(longUrl)navigate(`/auth?createNew=${longUrl}`);
};

  return <div className='flex flex-col items-center'>
    <h2 className="my-10 sm:my-16 text-3xl sm:text-6xl lg:text-7xl text-white text-center font-extrabold leading-tight">
      The only URL shortener you'll ever need!👇
    </h2>
    <form onSubmit={handleShorten} className='sm:h-14 flex flex-col sm:flex-row w-full md:w-2/4 gap-2'>
      <Input type="url" value={longUrl} placeholder="Enter your URL here"
      onChange={(e) => setLongUrl(e.target.value)}
      className="flex-1 h-full py-4 px-4" />
      <Button type="submit" variant="secondary" className="h-full">Shorten!</Button>
    </form>
    <img src="/banner.png" alt="Banner" className='w-full my-11 md:px-11' />

    <Accordion type="multiple" collapsible className="w-full md:px-11">
  <AccordionItem value="item-1">
    <AccordionTrigger>What is Trimmer?</AccordionTrigger>
    <AccordionContent>
      Trimmer shortens long links into clean, shareable URLs.
    </AccordionContent>
  </AccordionItem>

  <AccordionItem value="item-2">
    <AccordionTrigger>Is Trimmer free to use?</AccordionTrigger>
    <AccordionContent>
      Yes, Trimmer offers a free plan with optional upgrades.
    </AccordionContent>
  </AccordionItem>

  <AccordionItem value="item-3">
    <AccordionTrigger>Does Trimmer track clicks?</AccordionTrigger>
    <AccordionContent>
      Yes, real-time click analytics are available.
    </AccordionContent>
  </AccordionItem>

  <AccordionItem value="item-4">
    <AccordionTrigger>Are Trimmer links secure?</AccordionTrigger>
    <AccordionContent>
      All links are protected with HTTPS.
    </AccordionContent>
  </AccordionItem>

  <AccordionItem value="item-5">
    <AccordionTrigger>Can I customize my links?</AccordionTrigger>
    <AccordionContent>
      Yes, create custom and branded short links.
    </AccordionContent>
  </AccordionItem>

  <AccordionItem value="item-6">
    <AccordionTrigger>Does Trimmer work on mobile?</AccordionTrigger>
    <AccordionContent>
      Yes, Trimmer works on all devices.
    </AccordionContent>
  </AccordionItem>
</Accordion>

  </div>;
}

export default LandingPage;