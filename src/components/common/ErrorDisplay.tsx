'use client';

import { AlertTriangle, RefreshCw } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ErrorDisplayProps {
  title?: string;
  message?: string;
  onRetry?: () => void;
}

export default function ErrorDisplay({
  title = '문제가 발생했습니다',
  message = '일시적인 오류가 발생했습니다.',
  onRetry
}: ErrorDisplayProps) {
  return (
    <div className="flex flex-col items-center justify-center py-12 space-y-4">
      <div className="p-3 rounded-full bg-red-50">
        <AlertTriangle className="w-8 h-8 text-red-500" />
      </div>

      <h3 className="text-lg font-semibold text-gray-900">{title}</h3>

      <p className="text-sm text-gray-600 text-center max-w-md">{message}</p>

      {onRetry && (
        <Button onClick={onRetry} variant="outline" size="sm">
          <RefreshCw className="w-4 h-4 mr-2" />
          다시 시도
        </Button>
      )}
    </div>
  );
}
