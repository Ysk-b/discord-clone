import { render, screen } from '@testing-library/react';
import Login from '~/app/components/Atom/Login';

// 目的を明確にし、下記よりテスト実現方法を調べた上で実装

// Next.js 13 Jest導入
// https://www.youtube.com/watch?v=AS79oJ3Fcf0
// https://zenn.dev/arsaga/articles/056e7196b41c08

// Jest公式Doc
// https://jestjs.io/ja/docs/expect

// FIX ME: Failed -> 再設計
describe('Test of Login Component', () => {
  it('Rendering properly goes', () => {
    render(<Login />);

    const LoginElement = screen.getByRole('Login');
    expect(LoginElement).toBeInTheDocument();
  });
});
