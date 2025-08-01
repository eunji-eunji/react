const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');  // mysql2 추천!

const app = express();
const PORT = 5000;

// 미들웨어
app.use(cors());
app.use(express.json());

// ✅ MySQL 연결 설정
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '1234',     // 본인 MySQL 비밀번호!
  database: 'project3', // 본인 DB 이름!
});

// 연결 확인
db.connect(err => {
  if (err) {
    console.error('❌ MySQL 연결 실패:', err);
    return;
  }
  console.log('✅ MySQL 연결 성공!');

    // ✅ 테이블 자동 생성
  const createTableSql = `
    CREATE TABLE IF NOT EXISTS todos (
      id INT AUTO_INCREMENT PRIMARY KEY,
      text VARCHAR(255) NOT NULL,
      completed TINYINT(1) DEFAULT 0,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
  `;
  db.query(createTableSql, (err) => {
    if (err) {
      console.error('❌ 테이블 생성 실패:', err);
    } else {
      console.log('✅ todos 테이블 준비 완료!');
    }
  });
});

// ✅ 예: 할 일 전체 조회
app.get('/todos', (req, res) => {
  db.query('SELECT * FROM todos', (err, results) => {
    if (err) {
      console.error(err);
      res.status(500).send('DB 오류!');
      return;
    }
    res.json(results);
  });
});

// POST 새로운 Todo 추가
app.post('/todos', (req, res) => {
  const { text } = req.body;
  db.query('INSERT INTO todos (text) VALUES (?)', [text], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send(err);
      return;
    }
    res.json({ id: result.insertId, text, completed: false });
  });
});

// PUT Todo 상태 변경
app.put('/todos/:id', (req, res) => {
  const { completed } = req.body;
  const { id } = req.params;
  db.query('UPDATE todos SET completed = ? WHERE id = ?', [completed, id], (err) => {
    if (err) {
      console.error(err);
      res.status(500).send(err);
      return;
    }
    res.sendStatus(200);
  });
});

// DELETE Todo 삭제
app.delete('/todos/:id', (req, res) => {
  const { id } = req.params;
  db.query('DELETE FROM todos WHERE id = ?', [id], (err) => {
    if (err) {
      console.error(err);
      res.status(500).send(err);
      return;
    }
    res.sendStatus(200);
  });
});

app.listen(PORT, () => {
  console.log(`🚀 서버 실행 중: http://localhost:${PORT}`);
});