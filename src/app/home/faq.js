"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

 function AccordionDemo() {
  return (
    <>
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>What is Megan Lacefield&apos;s message about?</AccordionTrigger>
        <AccordionContent>
        Megan Lacefield&apos;s message revolves around love, inspiration, and empowerment. Through her personal experiences and insights, she aims to inspire others to navigate the complexities of life with grace and faith.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>How often does Megan update her blog?</AccordionTrigger>
        <AccordionContent>
        Megan strives to share valuable content regularly. While the frequency may vary, she is committed to delivering insightful blog posts, touching on various aspects of marriage, family, and personal growth.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger> Can I book Megan for a speaking engagement?</AccordionTrigger>
        <AccordionContent>
        Absolutely! Megan is available for speaking engagements. Visit the &quot;Let&apos;s Connect&quot; section to submit your information. Megan has experience with local, national, and international events and is willing to travel.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-4">
        <AccordionTrigger>Is there a newsletter or mailing list I can join?</AccordionTrigger>
        <AccordionContent>
        Yes! Stay connected with Megan by subscribing to her newsletter. Receive exclusive content, event updates, and inspiration directly in your inbox. Look for the &quot;Join the Journey&quot; button in the hero section to subscribe.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
    </>
  )
}
export default AccordionDemo;