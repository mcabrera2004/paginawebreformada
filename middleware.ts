import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Permitir solo la ruta raíz "/"
  if (request.nextUrl.pathname === '/') {
    return NextResponse.next();
  }
  // Redirigir cualquier otra ruta a la raíz
  return NextResponse.redirect(new URL('/', request.url));
}

// Bloquea todo excepto la raíz y archivos internos de Next.js
export const config = {
  matcher: [
    '/((?!_next|favicon.ico|api|static|images).*)',
  ],
};