import { Card, CardProps } from '@/components/Card/Card'
import { Input } from '@/components/Input/Input'
import { TextArea } from '@/components/TextArea/TextArea'
import { cn } from '@/utils/cn'

interface ContactInformationProps extends CardProps {}

export const ContactInformation = ({
  className,
  ...props
}: ContactInformationProps) => {
  return (
    <Card
      className={cn('w-full gap-4 p-4 lg:px-16 lg:py-12', className)}
      {...props}
    >
      <h2 className="text-lg font-bold leading-normal tracking-tight">
        Enter your details below
      </h2>
      <Input label="Full Name" placeholder="Input text" />
      <Input label="Email" placeholder="Input text" />
      <Input label="Phone" placeholder="Input text" />
      <TextArea label="Visit reason" placeholder="Input text" />
    </Card>
  )
}