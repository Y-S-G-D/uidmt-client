import React from 'react';
import { Switch } from '../ui/switch';
import { Select } from '../ui/select';

interface SettingsProps {
  register: any;
  watch: any;
}

export function Settings({ register, watch }: SettingsProps) {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">Course Settings</h2>
      <div className="grid gap-6 md:grid-cols-2">
        <Switch
          label="Enable Comments"
          {...register('settings.comments_enabled')}
          checked={watch('settings.comments_enabled')}
        />
        <Switch
          label="Enable Certification"
          {...register('settings.certification_enabled')}
          checked={watch('settings.certification_enabled')}
        />
        <Select
          label="Visibility"
          {...register('settings.visibility')}
          options={[
            { value: 'Draft', label: 'Draft' },
            { value: 'Published', label: 'Published' },
            { value: 'Private', label: 'Private' },
          ]}
        />
      </div>
    </div>
  );
}