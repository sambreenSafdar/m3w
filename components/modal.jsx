import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import QRForm from './qr-form';

export function Modal({ isOpen, onClose }) {
  const onChange = (isOpen) => {
    if (!isOpen) {
      onClose();
    }
  };
  return (
    <Dialog open={isOpen} onOpenChange={onChange}>
      <DialogContent className="sm:max-w-[425px]">
        <QRForm />
      </DialogContent>
    </Dialog>
  );
}
