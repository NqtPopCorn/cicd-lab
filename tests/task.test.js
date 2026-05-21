const request = require('supertest');
const app = require('../src/app');

describe('Task API', () => {
  it('should fetch all tasks', async () => {
    const res = await request(app).get('/api/tasks');
    expect(res.statusCode).toEqual(200);
    expect(res.body.success).toBe(true);
    expect(Array.isArray(res.body.data)).toBe(true);
  });

  it('should create a new task', async () => {
    const res = await request(app)
      .post('/api/tasks')
      .send({
        title: 'New Task',
        completed: false,
      });
    expect(res.statusCode).toEqual(201);
    expect(res.body.success).toBe(true);
    expect(res.body.data.title).toEqual('New Task');
  });

  it('should fetch a task by ID', async () => {
    const res = await request(app).get('/api/tasks/1');
    expect(res.statusCode).toEqual(200);
    expect(res.body.success).toBe(true);
    expect(res.body.data.id).toEqual(1);
  });

  it('should update an existing task', async () => {
    const res = await request(app)
      .put('/api/tasks/1')
      .send({
        title: 'Updated Task',
        completed: true,
      });
    expect(res.statusCode).toEqual(200);
    expect(res.body.success).toBe(true);
    expect(res.body.data.title).toEqual('Updated Task');
    expect(res.body.data.completed).toBe(true);
  });

  it('should delete a task', async () => {
    const res = await request(app).delete('/api/tasks/1');
    expect(res.statusCode).toEqual(200);
    expect(res.body.success).toBe(true);
    expect(res.body.message).toEqual('Task deleted successfully');
  });

  it('should return 404 for non-existent task', async () => {
    const res = await request(app).get('/api/tasks/999');
    expect(res.statusCode).toEqual(404);
    expect(res.body.success).toBe(false);
  });
});
