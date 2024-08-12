import { Text, View } from 'react-native';

import { cn } from '@/lib/utils';

function Card({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof View>) {
  return (
    <View
      className={cn('rounded-xl bg-gray-500 ml-2 overflow-hidden', className)}
      {...props}
    />
  );
}

function CardHeader({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof View>) {
  return <View className={cn('p-4', className)} {...props} />;
}

function CardTitle({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof Text>) {
  return (
    <Text
      className={cn(
        'text-2xl font-semibold tracking-tight text-white',
        className
      )}
      {...props}
    />
  );
}

function CardDescription({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof Text>) {
  return (
    <Text
      className={cn('text-sm text-gray-800', className)}
      {...props}
    />
  );
}

function CardContent({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof View>) {
  return <View className={cn('p-0 pt-0', className)} {...props} />;
}

// TODO: style
function CardFooter({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof View>) {
  return (
    <View
      className={cn(className, 'flex flex-row items-center p-4 pt-0')}
      {...props}
    />
  );
}

interface SimpleCardProps {
  className?: string;
  title?: string;
  description?: string;
  content?: string;
  footer?: string;
}

function SimpleCard({
  className,
  title,
  description,
  content,
  footer,
}: SimpleCardProps) {
  return (
    <Card className={className}>
      <CardHeader>
        {title && (
          <Text className="text-2xl font-semibold tracking-tight text-primary text-white">
            {title}
          </Text>
        )}
        {description && (
          <Text className="text-sm text-muted-foreground">{description}</Text>
        )}
      </CardHeader>
      {content && (
        <CardContent>
          <Text className="text-base text-primary">{content}</Text>
        </CardContent>
      )}
      {footer && (
        <CardFooter>
          <Text className="text-sm text-muted-foreground text-gray-700">{footer}</Text>
        </CardFooter>
      )}
    </Card>
  );
}

Card.Title = CardTitle;
Card.Header = CardHeader;
Card.Description = CardDescription;
Card.Content = CardContent;
Card.Footer = CardFooter;

export {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  SimpleCard,
};
