'use client';

import * as React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { DayPicker } from 'react-day-picker';
import { ptBR } from 'date-fns/locale';
import { format } from 'date-fns';

import { cn } from '@/lib/utils';
import { buttonVariants } from '@/components/ui/button';

export type CalendarProps = React.ComponentProps<typeof DayPicker>;

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: CalendarProps) {
  return (
    <DayPicker
      locale={ptBR}
      showOutsideDays={showOutsideDays}
      formatters={{
        formatMonthCaption: (month) => {
          const formattedMonth = format(month, 'MMMM', { locale: ptBR });
          return (
            formattedMonth.charAt(0).toUpperCase() + formattedMonth.slice(1)
          );
        },
        formatWeekdayName: (day) =>
          format(day, 'EEEEEE', { locale: ptBR }).replace(/^./, (char) =>
            char.toUpperCase()
          ),
      }}
      className={cn('p-3', className)}
      classNames={{
        months: 'flex flex-col sm:flex-row space-y-0 sm:space-x-4',
        month: 'w-full',
        caption: 'flex justify-center pt-1 relative items-center',
        caption_label: 'text-sm font-medium capitalize',
        nav: 'space-x-1 flex items-center',
        nav_button: cn(
          buttonVariants({ variant: 'outline' }),
          'h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100'
        ),
        nav_button_previous: 'absolute left-1',
        nav_button_next: 'absolute right-1',
        table: 'w-full border-collapse table-fixed',
        head_row: 'grid grid-cols-7',
        head_cell:
          'text-muted-foreground text-center font-normal text-[0.8rem] p-1',
        row: 'grid grid-cols-7 w-full h-10',
        cell: 'h-full w-full text-center text-sm p-1',
        day: cn(
          buttonVariants({ variant: 'ghost' }),
          'h-full w-full p-0 font-normal aria-selected:opacity-100'
        ),
        day_selected:
          'bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground',
        day_today: 'bg-accent text-accent-foreground',
        day_outside: 'text-muted-foreground',
        day_disabled: 'text-muted-foreground opacity-50',
        ...classNames,
      }}
      components={
        {
          IconLeft: ({ className, ...props }: { className?: string }) => (
            <ChevronLeft className={cn('h-4 w-4', className)} {...props} />
          ),
          IconRight: ({ className, ...props }: { className?: string }) => (
            <ChevronRight className={cn('h-4 w-4', className)} {...props} />
          ),
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } as any
      }
      {...props}
    />
  );
}
Calendar.displayName = 'Calendar';

export { Calendar };
