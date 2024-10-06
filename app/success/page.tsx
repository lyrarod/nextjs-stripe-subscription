"use client";

import Link from "next/link";
import { useRef } from "react";

import type { ConfettiRef } from "@/components/ui/confetti";
import Confetti from "@/components/ui/confetti";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Check } from "lucide-react";

export default function Success() {
  const confettiRef = useRef<ConfettiRef>(null);

  return (
    <div className="relative flex flex-col items-center justify-center w-full min-h-screen overflow-hidden border rounded-lg bg-background md:shadow-xl gap-y-6">
      <span className="text-5xl sm:text-8xl">🎉</span>
      <span className="text-6xl font-semibold leading-none text-center text-transparent whitespace-pre-wrap pointer-events-none bg-gradient-to-b from-black to-gray-300/80 bg-clip-text sm:text-8xl dark:from-white dark:to-slate-900/10">
        Parabéns!
      </span>

      <p className="flex items-center text-sm sm:text-base">
        <Check className="mr-1 sm:mr-2 text-primary size-5 sm:size-6" />O seu
        pagamento foi efetuado com sucesso.
      </p>

      <Confetti
        ref={confettiRef}
        className="absolute top-0 left-0 z-0 size-full"
        onMouseEnter={() => {
          confettiRef.current?.fire({});
        }}
      />
      <Button asChild className="z-10" variant={"outline"} size={"default"}>
        <Link href={"/"} className="">
          <ArrowLeft className="size-4" />
          &nbsp;Voltar
        </Link>
      </Button>
    </div>
  );
}
