import { useForm, FormProvider } from 'react-hook-form';

import DatePicker from '@/components/common/form/fields/DatePicker';
import ShopifyAppProvider from '@/providers/ShopifyAppProvider';

export default function DatePickerExampleForm() {
  const form = useForm<{ example_date: string; }>({
    defaultValues: {
      example_date: '',
    }
  });
  return (
    <FormProvider {...form}>
      <ShopifyAppProvider>
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8" style={{ minWidth: '20rem' }}>
          <DatePicker required fieldName="example_date" label="Example Date" />
        </form>
      </ShopifyAppProvider>
    </FormProvider>)
}