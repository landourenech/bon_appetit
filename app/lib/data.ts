// import { sql } from '@vercel/postgres';


// export async function fetchPro() {
//     try {
//       const data = await sql<Promos>`
//         SELECT
//           id,
//           name
//         FROM customers
//         ORDER BY name ASC
//       `;
  
//       const customers = data.rows;
//       return customers;
//     } catch (err) {
//       console.error('Database Error:', err);
//       throw new Error('Failed to fetch all customers.');
//     }
//   }