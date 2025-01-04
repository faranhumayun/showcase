import { CarProps } from '@/types'
import React, { Fragment } from 'react'
import { Description, Dialog, DialogBackdrop, DialogPanel, DialogTitle, Transition, TransitionChild } from '@headlessui/react'
import Image from 'next/image'

interface CarDetailsProps {
  isOpen: boolean
  closeModal: () => void
  car: CarProps
}

const CarDetails = ({isOpen, closeModal, car}: CarDetailsProps) => {
  return (
    <>
    <Dialog open={isOpen} onClose={closeModal} className="relative z-50">
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-black/30 duration-300 ease-out data-[closed]:opacity-0"
        />
        <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
          <DialogPanel
            transition
            className="max-w-lg space-y-4 bg-white p-12 duration-300 ease-out data-[closed]:scale-95 data-[closed]:opacity-0"
          >
            <DialogTitle className="text-lg font-bold">Deactivate account</DialogTitle>
            <Description>This will permanently deactivate your account</Description>
            <p>Are you sure you want to deactivate your account? All of your data will be permanently removed.</p>
            <div className="flex gap-4">
              <button onClick={closeModal}>Cancel</button>
              {/* <button onClick={() => setIsOpen(false)}>Deactivate</button> */}
            </div>
          </DialogPanel>
        </div>
      </Dialog>
  </>
  )
}

export default CarDetails