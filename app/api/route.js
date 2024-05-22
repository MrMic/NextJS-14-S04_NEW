export function GET( request ) {
  console.log( request )

  // return Response.json({})
  return new Response( 'Hello, Next.js!' )
}

// export function POST( request ) {
//   console.log( request )
// }
