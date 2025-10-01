import { Pool } from "pg";
import { NextResponse } from "next/server";

const pool = new Pool({
  host: process.env.PGHOST,
  port: Number(process.env.PGPORT),
  user: process.env.PGUSER,
  password: process.env.PGPASSWORD,
  database: process.env.PGDATABASE,
});

export async function POST(request: Request) {
  try {
    const { name, feedback } = await request.json();

    if (!name?.trim() || !feedback?.trim()) {
      return NextResponse.json(
        { status: "error", message: "Thiếu name hoặc feedback" },
        { status: 400 }
      );
    }

    const query = `
    INSERT INTO mln_response (name, response, created_at)
    VALUES ($1, $2, NOW())
    RETURNING id;
  `;
  
  const result = await pool.query(query, [name.trim(), feedback.trim()]);

    return NextResponse.json({
      status: "success",
      message: "Phản hồi đã được lưu",
      id: result.rows[0].id,
    });
  } catch (error: any) {
    console.error("DB error:", error);
    return NextResponse.json(
      { status: "error", message: "Không thể lưu phản hồi" },
      { status: 500 }
    );
  }
}
